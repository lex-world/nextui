import * as React from 'react';
import withDefaults from './with-defaults';

interface Props {
  width?: number;
  height?: number;
  plain?: boolean;
  size?: number;
  fill?: string;
}

const defaultProps = {
  width: 24,
  height: 24,
  plain: false
};

const Close: React.FC<Props> = ({
  size,
  fill,
  plain,
  width,
  height,
  ...props
}) => {
  if (plain) {
    return (
      <svg
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        fill="none"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
    );
  }
  return (
    <svg
      width={size || width}
      height={size || height}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M12 2a10 10 0 1010 10A10.016 10.016 0 0012 2zm3.36 12.3a.754.754 0 010 1.06.748.748 0 01-1.06 0l-2.3-2.3-2.3 2.3a.748.748 0 01-1.06 0 .754.754 0 010-1.06l2.3-2.3-2.3-2.3A.75.75 0 019.7 8.64l2.3 2.3 2.3-2.3a.75.75 0 011.06 1.06l-2.3 2.3z"
        fill={fill}
      />
    </svg>
  );
};

const MemoClose = React.memo(Close);

export default withDefaults(MemoClose, defaultProps);
