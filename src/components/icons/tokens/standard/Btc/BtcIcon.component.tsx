import React from 'react'

import { IIcon } from '@interfaces/core'
import { SvgIcon } from '@mui/material'

const BtcIcon: React.FC<IIcon> = ({ fill = '#F7931A', sx, ...rest }) => (
  <SvgIcon
    viewBox="0 0 24 24"
    sx={{ fill: 'none', width: '24px', height: '24px', ...sx }}
    {...rest}
  >
    <g clipPath="url(#clip0_1:9021)">
      <path
        d="M23.6229 14.9204C22.0202 21.3491 15.509 25.2614 9.07965 23.6583C2.65295 22.0556 -1.25939 15.5441 0.344001 9.11594C1.94598 2.68661 8.45715 -1.22603 14.8846 0.376659C21.3135 1.97935 25.2256 8.49162 23.6227 14.9206L23.6228 14.9204H23.6229Z"
        fill={fill}
      />
      <path
        d="M17.2915 10.2903C17.5304 8.6934 16.3146 7.83498 14.6521 7.26233L15.1914 5.09914L13.8746 4.77103L13.3496 6.87726C13.0034 6.79092 12.6479 6.70957 12.2945 6.62892L12.8234 4.50878L11.5074 4.18066L10.9678 6.34315C10.6813 6.27793 10.3999 6.21347 10.1269 6.14554L10.1285 6.13874L8.31257 5.68528L7.96229 7.09171C7.96229 7.09171 8.93924 7.31565 8.91865 7.32943C9.45189 7.46252 9.54832 7.81551 9.5323 8.09529L8.91795 10.5597C8.95467 10.569 9.0023 10.5825 9.05485 10.6036C9.01092 10.5927 8.96417 10.5808 8.91566 10.5692L8.05455 14.0214C7.98938 14.1834 7.82398 14.4266 7.45117 14.3342C7.46437 14.3534 6.4941 14.0954 6.4941 14.0954L5.84033 15.6027L7.55393 16.0299C7.87272 16.1098 8.18512 16.1935 8.49276 16.2721L7.94786 18.4601L9.26313 18.7883L9.80276 16.6235C10.1621 16.721 10.5108 16.811 10.8522 16.8958L10.3143 19.0504L11.6312 19.3785L12.1761 17.1946C14.4215 17.6196 16.1099 17.4482 16.8205 15.4172C17.3932 13.7821 16.792 12.8389 15.6107 12.2238C16.4711 12.0254 17.1192 11.4595 17.292 10.2905L17.2916 10.2902L17.2915 10.2903ZM14.2829 14.5091C13.876 16.1443 11.1228 15.2604 10.2302 15.0387L10.9533 12.14C11.8459 12.3628 14.7082 12.8038 14.283 14.5091H14.2829ZM14.6902 10.2666C14.319 11.754 12.0275 10.9984 11.2841 10.8131L11.9397 8.1841C12.6831 8.36939 15.0769 8.71522 14.6903 10.2666H14.6902Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1:9021">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
)

export default BtcIcon