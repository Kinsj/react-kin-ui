import React, {HTMLAttributes, useRef} from 'react';
import useDidUpdateBeforeLayout from '../helpers/hooks/useDidUpdateBeforeLayout';
import useImmerState from '../helpers/hooks/useImmerState';
import useDidUpdate from '../helpers/hooks/useDidUpdate';

export interface IFadeProps extends HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  dur?: number
}

interface IFadeState {
  state: 'enter' | 'leave',
  opacity: boolean,
  exist: boolean
}

const Fade: React.FC<IFadeProps> = (props) => {
  const {dur} = props;
  const [fadeState, setFadeState] = useImmerState<IFadeState>({
    state: props.visible ? 'enter' : 'leave',
    opacity: props.visible,
    exist: props.visible
  });
  const timer = useRef<number>(-1);

  // props.visible发生变化，触发状态转移
  useDidUpdateBeforeLayout(() => {
    if (fadeState.opacity !== props.visible) {
      setFadeState(draft => {
        draft.state = props.visible ? 'enter' : 'leave';
        if (props.visible) {
          draft.exist = true; // 如果visible 为 false, 则无视修改
        }
      });
    }
  }, [props.visible, props.dur]);

  // 产生状态转移，触发相应变化
  useDidUpdate(() => {
    // 只要状态产生变化则清除定时器
    clearTimeout(timer.current);

    if (fadeState.state === 'enter') {
      setFadeState(draft => {
        draft.opacity = true;
      });
    } else {
      setFadeState(draft => {
        draft.opacity = false;
      });
      // 创建定时器，延时清除dom
      timer.current = setTimeout(() => {
        setFadeState(draft => {
          draft.exist = false;
        });
      }, props.dur);
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [fadeState.state]);


  return (
    <>
      {
        fadeState.exist &&
        <div style={{
          transition: `opacity ${dur}ms linear`,
          opacity: fadeState.opacity ? '1' : '0'
        }}
        >
          {props.children}
        </div>
      }
    </>
  );
};
Fade.defaultProps = {
  dur: 300
};

export default Fade;