import React, {useRef} from 'react';
import useImmerState from '../helpers/hooks/useImmerState';
import useDidUpdate from '../helpers/hooks/useDidUpdate';
import useDidUpdateBeforeLayout from '../helpers/hooks/useDidUpdateBeforeLayout';

export interface ISliderProps extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean,
  dur?: number,
  direction?: 'up' | 'left' | 'right',
}

interface ISlideState {
  state: 'open' | 'close',
  open: boolean
}

const Slider: React.FC<ISliderProps> = (props) => {
  const {dur} = props;
  const [slideState, setSlideState] = useImmerState<ISlideState>({
    state: props.visible ? 'open' : 'close',
    open: props.visible
  });
  const timer = useRef<number>(-1);
  const childRef = useRef<HTMLDivElement>(null);

  // props.visible发生变化，触发状态转移
  useDidUpdateBeforeLayout(() => {
    if (slideState.open !== props.visible) {
      setSlideState(draft => {
        draft.state = props.visible ? 'open' : 'close';
      });
    }
  }, [props.visible, props.dur]);

  // 产生状态转移，触发相应变化
  useDidUpdate(() => {
    // 只要状态产生变化则清除定时器
    clearTimeout(timer.current);

    if (slideState.state === 'open') {
      timer.current = setTimeout(() => {
        setSlideState(draft => {
          draft.open = true;
        });
      });
    } else {
      setSlideState(draft => {
        draft.open = false;
      });
    }
    return () => {
      clearTimeout(timer.current);
    };
  }, [slideState.state]);


  return (
    <div
      className="gulu-slider"
      style={{
        transition: `height ${dur}ms ease`,
        height: slideState.open ?
          (childRef?.current?.clientHeight || 'auto') :
          0,
        overflow: 'hidden'
      }}
    >
      <div ref={childRef}>
        {props.children}
      </div>
    </div>
  );
};


Slider.defaultProps = {
  dur: 300
};

export default Slider;