import React from 'react'

import { IIcon } from '@interfaces/core'
import { SvgIcon } from '@mui/material'

export const BtcLinearIcon: React.FC<IIcon> = ({
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
    <g clipPath="url(#clip0_303_280)">
      <g filter="url(#filter0_i_303_280)">
        <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_303_280)" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26.7943 15.7663C26.5624 13.3624 24.4755 12.5559 21.8358 12.3102V9H19.7952V12.2487H18.1643V9H16.1392V12.3332H12V14.5029C12 14.5029 13.5073 14.476 13.4841 14.5029C14.0489 14.4411 14.5616 14.835 14.6435 15.3938V24.5179C14.6318 24.7094 14.5426 24.8881 14.3962 25.0133C14.2525 25.1408 14.0627 25.2046 13.8705 25.1899C13.8976 25.213 12.3865 25.1899 12.3865 25.1899L12 27.613H16.1005V31H18.1411V27.6629H19.772V30.9846H21.8165V27.6361C25.2639 27.4287 27.6678 26.5839 27.9692 23.3774C28.2127 20.7968 26.9914 19.6448 25.0397 19.1801C26.2262 18.6003 26.9605 17.525 26.7943 15.7663ZM23.9345 22.9781C23.9345 25.2907 20.2735 25.2375 18.6029 25.2133C18.4537 25.2111 18.3204 25.2092 18.207 25.2092V20.7393C18.3486 20.7397 18.5213 20.7359 18.7173 20.7316C20.4346 20.6939 23.9345 20.617 23.9345 22.9781ZM18.5578 18.7084C19.9578 18.7331 22.9873 18.7865 22.9873 16.6803C22.9873 14.5207 20.0522 14.5965 18.625 14.6334C18.4661 14.6375 18.3258 14.6412 18.2104 14.6412V18.704C18.3093 18.704 18.4264 18.7061 18.5578 18.7084Z"
        fill={fill}
      />
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
    </g>
    <defs>
      <filter
        id="filter0_i_303_280"
        x="0"
        y="0"
        width="40"
        height="40"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="4"
          operator="erode"
          in="SourceAlpha"
          result="effect1_innerShadow_303_280"
        />
        <feOffset />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.0823529 0 0 0 0 0.109804 0 0 0 0 0.321569 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_303_280"
        />
      </filter>
      <linearGradient
        id="paint0_linear_303_280"
        x1="20"
        y1="0"
        x2="20"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.0260417" stopColor="#0B0A09" />
        <stop offset="0.4375" stopColor="#F74141" />
        <stop offset="0.692708" stopColor="#3455A9" />
        <stop offset="1" stopColor="#22285A" />
      </linearGradient>
      <clipPath id="clip0_303_280">
        <rect width="40" height="40" fill="white" />
      </clipPath>
    </defs>
  </SvgIcon>
)
