import React from 'react'

import { IIcon } from '@interfaces/core'
import { SvgIcon } from '@mui/material'

export const BusdLinearIcon: React.FC<IIcon> = ({
  fill = '#FFFFFF',
  style,
  sx,
  ...rest
}) => (
  <SvgIcon
    viewBox="0 0 40 40"
    sx={{ fill: 'none', width: '24px', height: '24px', ...sx }}
    style={style}
    {...rest}
  >
    <g clipPath="url(#clip0_2523_28648)">
      <path
        d="M17.5082 0C14.4644 0.383701 11.5492 1.46521 8.98834 3.16085C6.42744 4.8565 4.28941 7.12083 2.73966 9.77869C1.18991 12.4365 0.269972 15.4167 0.0510117 18.4885C-0.167949 21.5604 0.319938 24.6417 1.47693 27.494L3.33525 26.7343C2.29434 24.1681 1.8554 21.396 2.05239 18.6323C2.24938 15.8686 3.07703 13.1875 4.4713 10.7963C5.86558 8.40507 7.7891 6.3679 10.0931 4.84237C12.3971 3.31684 15.0197 2.34384 17.7582 1.99863L17.5082 0Z"
        fill={fill}
      />
      <path
        d="M38.4313 27.7163C39.6222 24.8781 40.1468 21.8029 39.9645 18.7286C39.7822 15.6543 38.8978 12.6634 37.3799 9.98707C35.8619 7.31078 33.7511 5.02091 31.2106 3.29461C28.6701 1.56831 25.7681 0.451846 22.729 0.0315916L22.4552 2.02707C25.1894 2.40517 27.8002 3.40962 30.0859 4.96273C32.3715 6.51584 34.2706 8.57598 35.6362 10.9838C37.0019 13.3916 37.7975 16.0825 37.9615 18.8483C38.1256 21.6142 37.6536 24.3808 36.5821 26.9343L38.4313 27.7163Z"
        fill={fill}
      />
      <path
        d="M4.06009 32.0491C5.91302 34.5036 8.30355 36.4973 11.0468 37.8759C13.79 39.2546 16.8123 39.9812 19.88 39.9996C22.9477 40.0181 25.9785 39.3278 28.738 37.9822C31.4975 36.6367 33.9116 34.6719 35.7937 32.2398L34.2091 31.004C32.5159 33.1921 30.344 34.9598 27.8613 36.1703C25.3787 37.3809 22.652 38.0019 19.892 37.9854C17.1321 37.9688 14.413 37.315 11.945 36.0747C9.47697 34.8344 7.32626 33.0407 5.65923 30.8325L4.06009 32.0491Z"
        fill={fill}
      />
      <path
        d="M19.7259 9L22.3834 11.7215L15.6917 18.4132L13.0342 15.7557L19.7259 9Z"
        fill={fill}
      />
      <path
        d="M23.7601 13.0342L26.4176 15.7557L15.6917 26.4816L13.0342 23.8242L23.7601 13.0342Z"
        fill={fill}
      />
      <path
        d="M11.6575 17.0688L14.3149 19.7904L11.6575 22.4478L9 19.7904L11.6575 17.0688Z"
        fill={fill}
      />
      <path
        d="M27.7948 17.0688L30.4523 19.7904L19.7263 30.5163L17.0688 27.8588L27.7948 17.0688Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_2523_28648">
        <rect width="40" height="40" fill={fill} />
      </clipPath>
    </defs>
  </SvgIcon>
)
