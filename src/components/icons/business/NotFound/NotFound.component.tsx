import React from 'react'

import { IIcon } from '@interfaces/core'
import { SvgIcon } from '@mui/material'

export const NotFoundIcon: React.FC<IIcon> = ({
  fill = '#635EB0',
  sx,
  ...rest
}) => {
  return (
    <SvgIcon
      viewBox="0 0 805 600"
      sx={{ fill: 'none', width: '800px', height: '600px', ...sx }}
      {...rest}
    >
      <g clipPath="url(#clip0_2537_37361)">
        <path
          style={{ mixBlendMode: 'screen' }}
          d="M492.691 399.069C542.563 351.294 542.179 272.819 491.834 223.79C441.489 174.761 360.248 173.744 310.376 221.519C260.504 269.295 260.887 347.77 311.232 396.799C361.577 445.828 442.819 446.844 492.691 399.069Z"
          fill="url(#paint0_radial_2537_37361)"
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          d="M480.795 380.817C523.34 340.061 523.011 273.113 480.06 231.285C437.11 189.457 367.802 188.589 325.257 229.345C282.712 270.101 283.041 337.048 325.992 378.876C368.942 420.704 438.25 421.573 480.795 380.817Z"
          fill="url(#paint1_radial_2537_37361)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M306.979 304.523C307 316.556 309.487 328.495 314.299 339.658C319.111 350.822 326.154 360.991 335.025 369.586C343.896 378.181 354.421 385.033 366.001 389.751C377.58 394.469 389.987 396.96 402.512 397.083C415.037 397.205 427.435 394.957 438.999 390.465C450.563 385.974 461.066 379.328 469.908 370.906C478.75 362.485 485.758 352.453 490.532 341.383C495.306 330.314 497.753 318.423 497.733 306.391C497.726 303.065 497.535 299.74 497.161 296.43C494.541 273.047 482.686 251.417 464.043 236.007C445.4 220.597 421.394 212.584 396.981 213.623C372.569 214.661 349.615 224.672 332.859 241.588C316.103 258.504 306.826 281.033 306.942 304.523L306.979 304.523Z"
          fill="white"
        />
        <g opacity="0.2">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M426.852 367.616C425.634 370.038 424.812 372.162 422.747 374.155C420.503 376.314 418.765 376.705 415.872 377.459C414.186 377.9 413.833 378.452 411.681 378.392C410.273 378.372 408.33 377.998 406.973 378.267C403.931 378.878 402.296 381.406 398.883 381.533C395.642 381.655 393.561 380.609 390.749 379.75C388.115 378.95 385.036 377.813 382.567 376.903C379.897 375.905 377.509 375.193 374.735 374.307C371.759 373.368 370.278 371.464 366.549 372.397C366.304 373.704 366.638 375.782 364.929 376.412C363.765 376.846 361.826 375.662 360.577 375.179C357.327 373.947 354.38 373.248 351.294 371.983C349.807 371.363 348.712 371.389 347.204 370.302C345.697 369.216 344.188 368.468 342.673 367.487C339.872 365.669 337.125 363.705 334.339 361.859C328.984 358.327 325.542 353.539 322.301 348.48C320.6 345.818 319.63 342.893 318.563 339.874C317.254 336.147 317.705 335.103 320.341 332.145C325.033 334.068 326.915 331.339 325.625 326.583C324.504 322.4 324.037 316.852 325.048 312.517C325.222 311.744 325.851 311.204 325.99 310.106C326.144 308.903 325.895 307.99 326.235 306.789C326.83 305.015 327.143 303.164 327.161 301.297C327.171 299.14 326.869 296.774 327.452 294.703C327.815 293.397 328.317 292.84 328.398 291.417C328.478 289.995 328.216 288.665 328.655 287.262C329.788 283.613 333.339 282.635 336.554 281.632C338.74 280.959 339.845 280.27 341.232 281.7C342.619 283.13 342.333 285.276 342.339 287.236C342.323 290.909 339.828 294.115 337.647 297.037C336.673 298.355 334.976 299.613 335.214 301.443C335.343 302.446 336.654 302.613 336.567 303.627C336.465 304.845 335.07 305.198 334.374 306.041C328.801 312.819 339.225 319.006 344.192 322.716C347.021 324.83 351.284 325.956 352.356 329.412C353.494 333.116 350.836 336.144 349.377 339.238C347.873 342.501 346.573 348.263 348.712 351.382C349.63 352.714 351.414 353.536 352.797 354.17C354.833 355.13 355.603 356.326 357.4 357.564C360.382 359.539 363.99 360.467 367.594 360.188C369.904 360.08 371.591 359.224 373.414 358.045C374.812 357.142 376.689 355.485 378.344 355.065C379.523 354.765 380.401 355.017 381.601 354.894C383.24 354.727 383.556 354.09 384.995 353.759C387.471 353.189 389.222 354.871 391.154 355.83C392.797 356.643 394.743 357.8 396.735 357.321C398.726 356.843 400.899 355.739 402.755 355.407C407.191 354.597 414.373 354.399 417.914 357.306C419.703 358.742 420.319 360.795 421.914 362.341C423.509 363.887 426.39 364.233 426.852 367.616Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M338.589 269.83C342.85 269.977 346.798 266.995 350.272 264.769C353.134 262.942 356.143 260.045 357.541 257.175C357.955 256.306 358.1 255.589 358.424 254.713C358.5 254.523 359.547 251.909 359.547 251.845C359.509 250.307 358.199 248.462 356.997 247.267C353.548 243.832 348.24 246.194 344.759 248.181C341.439 250.029 338.334 252.198 335.49 254.653C334.144 255.839 332.306 256.912 331.346 258.421C330.085 260.412 330.439 262.864 330.466 265.304C330.501 269.028 325.341 273.24 331.558 274.148C334.008 274.508 341.505 272.665 342.076 269.881L338.589 269.83Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M414.467 389.45C415.52 390.579 416.768 389.829 417.969 389.501C419.088 389.156 420.262 388.992 421.443 389.016C423.882 389.165 426.327 389.016 428.718 388.572C431.015 388.062 433.192 387.777 435.43 387.259C436.31 387.068 437.147 386.579 438.027 386.451C438.579 386.353 439.197 386.539 439.748 386.476C440.009 386.438 440.033 386.142 440.219 386.102C440.667 386.017 441.091 386.115 441.539 386.016C443.649 385.648 445.734 385.163 447.782 384.563C448.698 384.431 449.587 384.175 450.423 383.804C451.32 383.303 452.544 382.749 453.352 382.197C456.498 380.05 459.941 378.259 462.815 375.579C465.524 373.059 468.306 370.723 471.148 368.409C471.806 367.869 472.338 367.143 473.026 366.646C473.793 366.204 474.525 365.71 475.216 365.168C476.62 363.777 477.894 362.271 479.022 360.669C481.331 357.564 484.263 355.04 486.111 351.605C486.991 349.953 487.78 348.35 488.823 346.778C489.504 345.723 490.097 344.619 490.596 343.476C490.95 342.656 491.67 341.686 491.912 340.9C492.282 339.721 492.28 338.585 492.628 337.441C492.779 336.942 493.131 336.609 493.26 336.117C493.419 335.506 493.072 334.768 493.216 334.142C493.361 333.516 493.719 333.352 493.856 332.826C493.992 332.299 493.668 331.476 493.812 330.85C493.957 330.225 494.315 330.054 494.452 329.534C494.634 328.831 494.22 327.979 494.402 327.277C494.539 326.75 494.912 326.508 495.041 325.96C495.111 325.314 495.114 324.662 495.05 324.014C495.057 322.604 495.583 321.511 495.664 320.166C495.841 318.791 495.847 317.399 495.682 316.019C495.558 315.467 495.187 315.208 495.055 314.684C494.879 313.977 495.248 313.234 494.997 312.497C493.427 312.087 493.912 315.246 493.916 316.008C493.91 317.418 493.288 318.192 493.319 319.574C493.356 321.281 492.602 321.503 491.531 322.728C490.829 323.398 490.238 324.164 489.778 325.002C489.626 325.465 489.638 326.22 489.509 326.676C489.316 327.205 489.216 327.761 489.211 328.322C489.205 329.662 489.307 330.347 488.192 331.191C487.298 331.881 486.265 332.391 485.153 332.691C483.825 332.954 482.671 332.923 481.313 333.136C480.702 333.233 480.484 333.596 479.91 333.715C479.164 333.873 478.421 333.425 477.674 333.767C476.877 334.316 476.272 335.077 475.936 335.956C475.77 336.484 475.723 337.04 475.797 337.589C475.872 338.137 476.066 338.667 476.368 339.143C476.568 339.512 476.723 339.895 476.945 340.244C477.167 340.593 477.753 341.06 477.99 341.472C479.077 343.392 477.476 346.472 477.036 348.073C476.87 348.698 475.855 350.587 476.404 351.167C476.953 351.746 480.248 351.3 480.876 350.964C481.23 351.674 480.539 352.997 480.32 353.727C480.03 354.749 479.611 355.733 479.069 356.657C477.865 358.347 476.226 359.718 474.305 360.642C473.125 361.21 472.401 361.51 472.192 360.005C472.098 359.298 472.308 358.949 471.946 358.316C471.687 357.868 471.203 357.804 471.027 357.251C470.85 356.699 471.234 355.886 471.088 355.278C470.97 354.825 470.629 354.566 470.534 354.141C470.219 352.839 470.762 351.38 470.552 350.059C470.102 347.408 468.021 346.185 465.602 345.586C463.129 345.018 460.712 344.247 458.377 343.28C455.836 342.058 452.917 341.764 450.184 342.455C447.946 343.086 446.181 344.329 444.143 345.322C443.26 345.701 442.353 346.027 441.426 346.298C440.359 346.67 439.254 347.042 438.187 347.315C436.27 347.809 434.048 348.073 432.271 349.055C430.493 350.038 428.349 351.184 427.157 352.697C425.966 354.21 424.902 357.128 425.736 358.974C426.348 360.393 428.548 361.61 429.594 362.789C431.38 364.796 430.89 366.108 429.57 368.134C428.946 368.911 428.424 369.758 428.016 370.657C427.808 371.914 427.782 373.195 427.939 374.464C427.991 375.414 428.339 376.333 428.941 377.102C429.503 377.928 430.835 378.462 431.293 379.294C431.751 380.126 431.288 380.415 430.98 380.982C430.89 381.143 430.599 381.188 430.509 381.356C430.284 381.74 430.424 382.109 430.25 382.487C429.671 383.734 428.517 383.527 427.324 383.805C426.154 384.074 424.92 383.964 423.815 383.493C423.279 383.218 422.706 383.015 422.112 382.89C421.255 382.758 420.843 383.189 420.217 383.3C418.785 383.561 417.985 382.618 416.547 382.541C415.415 382.468 414.697 382.93 413.807 383.756C413.058 384.45 412.025 385.592 412.147 386.637C412.269 387.683 413.674 388.451 414.467 389.45Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M425.997 348.397C425.669 348.218 425.329 348.057 424.979 347.918C424.099 348.928 423.067 349.81 421.914 350.536C420.212 351.519 419.374 350.873 418.994 349.141C418.804 348.257 419.306 347.736 419.48 347.083C419.654 346.431 419.487 345.575 420.315 345.13C421.45 344.512 424.784 344.892 424.262 346.723L425.997 348.397Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M480.929 277.096C481.02 277.287 481.177 277.444 481.374 277.541C481.571 277.638 481.796 277.669 482.012 277.629C482.239 276.462 482.244 275.264 482.027 274.09C481.925 273.572 481.567 273.312 481.48 272.667C481.474 272.148 481.439 271.631 481.374 271.115C481.22 270.405 480.634 269.342 480.48 268.653C480.346 267.751 480.099 266.866 479.743 266.017C479.327 265.119 479.101 263.948 478.678 262.922C478.297 262.064 477.835 261.24 477.297 260.46C476.234 258.76 475.343 257.126 474.258 255.426C472.405 252.302 470.037 249.473 467.245 247.049C466.245 246.241 465.11 245.602 464.066 244.921C463.708 244.675 463.425 244.289 463.082 244.064C462.738 243.84 462.192 243.74 461.879 243.523C460.969 242.879 458.36 240.328 457.16 240.912C457.975 242.977 459.388 245.05 460.426 247.075C461.614 249.414 463.867 249.349 465.648 251.024C468.451 253.641 463.761 254.648 462.133 255.636C460.504 256.624 460.506 258.011 460.506 259.639C460.545 261.043 460.342 262.441 459.904 263.778C459.654 264.403 459.447 265.043 459.282 265.694C459.281 266.076 459.279 266.451 459.337 266.834C459.324 266.973 459.271 267.105 459.185 267.217C459.099 267.329 458.983 267.417 458.848 267.471C458.482 269.044 459.166 269.988 459.729 271.348C460.292 272.708 460.616 273.959 461.756 274.981C462.897 276.002 464.156 275.688 465.69 275.746C466.487 275.732 467.276 275.598 468.027 275.349C468.611 275.223 469.465 274.903 469.915 274.832C470.611 274.715 471.292 274.746 471.989 274.615C472.685 274.483 472.74 274.081 473.741 274.336C474.743 274.592 475.711 275.703 476.728 275.937C478.223 276.278 479.873 275.644 481.33 276.076C481.449 276.248 481.486 276.404 480.929 277.096Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M373.574 347.092C375.253 347.081 377.462 348.957 378.456 350.342C379.821 352.234 377.26 354.132 375.83 355.044C375.32 355.41 374.764 355.718 374.176 355.959C373.703 356.22 373.202 356.433 372.68 356.595C371.65 356.579 371.273 354.25 370.888 353.481C369.674 351.04 371.653 349.31 373.577 347.911L373.574 347.092Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M365.395 350.677L365.752 350.951C366.317 349.794 365.435 348.523 365.343 347.413C364.515 347.351 362.769 348.788 362.758 349.593C362.752 350.942 364.856 351.037 365.827 351.051L365.395 350.677Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M350.215 296.545C350.716 294.547 353.676 296.829 354.449 297.533C355.156 298.004 355.704 298.658 356.028 299.415C356.352 300.172 356.437 301 356.274 301.797C356.269 302.814 356.713 303.633 356.701 304.685C356.717 305.735 356.571 306.78 356.269 307.786C355.628 309.479 354.388 310.905 352.759 311.824C351.908 312.299 351.032 312.732 350.133 313.121C349.004 313.684 348.98 313.945 347.804 313.348C346.399 312.753 345.101 311.952 343.956 310.975C342.674 309.827 341.549 308.531 340.608 307.119C339.467 305.238 340.697 303.822 341.727 302.192C342.929 300.295 344.727 298.704 346.407 297.019C346.902 296.4 347.485 295.848 348.138 295.378C349.252 294.843 350.435 295.75 350.215 296.545Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M350.526 288.98L350.878 288.9C350.881 288.369 352.131 286.668 351.332 286.153C350.735 285.769 349.787 286.902 349.441 287.293C348.854 287.992 348.325 289.159 349.085 289.9C349.25 290.067 349.468 290.178 349.705 290.218C349.942 290.258 350.185 290.224 350.398 290.12C350.61 290.016 350.78 289.849 350.882 289.645C350.984 289.44 351.011 289.209 350.96 288.986L350.526 288.98Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M369.829 380.356C370.426 379.666 372.215 379.426 373.074 379.621C374.179 379.875 375.03 380.244 376.098 380.434C378.465 380.918 380.732 381.779 382.801 382.979C385.487 384.584 390.193 389.064 385.614 391.227C383.755 392.101 381.441 391.9 379.29 391.896C378.2 391.88 377.601 391.445 376.48 391.449C375.376 391.366 374.287 391.146 373.241 390.793C371.323 390.338 369.448 389.733 367.633 388.984C366.043 388.233 364.613 387.209 363.418 385.966C361.822 384.474 361.607 382.5 363.239 380.972C364.2 380.07 365.037 380.299 366.372 380.319L369.829 380.356Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M358.218 379.267C358.284 379.41 358.402 379.527 358.55 379.597C358.698 379.668 358.867 379.687 359.027 379.651C359.506 378.73 357.075 377.226 356.385 376.886C355.243 376.328 353.018 375.129 352.586 376.922C352.298 378.084 353.659 379.671 354.735 380.256C355.943 380.913 358.34 380.308 358.651 378.865L358.218 379.267Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M322.418 300.345L322.78 300.421C323.294 302.083 322.488 303.733 322.391 305.307C322.294 306.882 322.378 308.63 322.371 310.277C322.365 311.924 322.358 313.593 322.352 315.247C322.392 315.907 322.357 316.568 322.246 317.219C322.103 317.512 321.983 317.814 321.887 318.123C321.851 318.676 321.849 319.23 321.881 319.784C321.928 320.584 321.892 321.384 321.773 322.175C321.773 322.253 321.46 322.987 321.422 323.093C321.254 323.559 321.42 323.604 321.101 324.025C320.289 325.149 318.754 325.864 317.436 325.212C316.351 324.678 315.539 323.863 314.423 323.399C313.729 323.124 313.097 322.722 312.567 322.216C312.036 321.711 311.616 321.112 311.333 320.455C310.79 319.237 310.358 317.979 310.042 316.694C309.93 316.33 309.658 316.269 309.569 315.899C309.48 315.528 309.572 315.11 309.498 314.726C309.357 314.43 309.24 314.124 309.147 313.812C309.148 313.528 309.149 313.244 309.151 312.953C309.14 312.849 309.102 312.75 309.039 312.664C308.975 312.579 308.89 312.51 308.79 312.464C308.702 311.809 308.674 311.148 308.707 310.489C308.651 309.608 308.314 308.9 308.279 307.998C308.245 307.095 307.825 306.436 307.836 305.506C307.848 304.576 307.843 303.852 307.846 303.028C307.853 301.374 307.859 299.72 307.866 298.058C307.926 297.359 308.075 296.669 308.312 296.006C308.496 295.185 308.545 294.305 308.745 293.499C308.875 292.94 309.421 292.309 309.552 291.786C309.694 291.076 309.992 290.403 310.427 289.811C311.105 288.649 312.199 287.753 313.517 287.28C314.318 286.996 315.185 286.911 316.036 287.033C316.887 287.155 317.692 287.481 318.376 287.979C318.974 288.381 319.461 288.912 319.796 289.527C319.901 289.862 319.793 290.336 319.867 290.699C320.052 291.128 320.165 291.58 320.202 292.039C320.195 293.637 319.786 295.888 320.18 297.435C320.358 298.198 320.928 299.108 321.174 299.914C321.548 300.914 321.537 301.744 322.418 300.345Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M324.29 279.125C325.437 278.802 326.032 281.274 326.022 282.038C326.019 282.697 326.24 283.457 325.602 283.908C324.894 284.191 324.107 284.251 323.355 284.08C321.972 283.678 322.092 281.811 322.082 280.749C322.087 279.56 323.142 278.004 324.713 278.31L324.29 279.125Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M471.653 279.239C471.653 279.133 471.706 279.021 471.736 278.909C472.176 278.88 472.416 278.552 472.775 278.472C473.268 278.407 473.77 278.402 474.266 278.459C475.141 278.392 476.009 278.263 476.863 278.073C477.374 278.045 477.887 278.053 478.399 278.096C478.805 278.157 479.201 278.272 479.575 278.437C480.529 278.649 481.275 278.582 482.092 279.18C483.351 280.215 484.377 281.478 485.11 282.894C486.158 284.459 486.749 286.256 486.825 288.099C486.921 288.869 486.747 289.645 486.33 290.308C485.861 290.92 485.473 291.585 485.173 292.288C484.382 294.026 483.671 294.616 481.583 294.599C479.697 294.572 477.949 293.53 476.372 292.688C475.677 292.245 475.01 291.764 474.373 291.248C473.736 290.91 473.163 290.472 472.679 289.953C471.574 288.476 471.404 286.596 470.971 284.988C470.683 283.992 470.627 282.951 470.806 281.937C470.851 281.754 471.067 281.743 471.105 281.609C471.204 281.293 471.108 280.96 471.199 280.665C471.335 280.201 471.8 279.778 471.653 279.239Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M466.974 282.457C468.086 282.473 466.591 279.505 465.351 279.607C464.298 279.726 463.351 281.351 463.1 282.202C462.017 285.874 467.912 286.243 467.845 282.858L466.974 282.457Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M452.839 288.978C452.932 289.847 453.83 290.403 454.028 291.11C454.1 291.481 454.078 291.861 453.964 292.22C453.849 292.578 453.646 292.905 453.371 293.173C452.974 293.675 452.226 294.446 451.504 294.295C450.782 294.143 450.354 293.207 449.79 292.797C448.654 291.962 446.639 291.108 448.054 289.494C448.693 288.891 449.545 288.533 450.45 288.485C450.957 288.412 451.477 288.454 451.967 288.607C452.457 288.76 452.903 289.02 453.269 289.365L452.839 288.978Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M482.62 326.294C484.221 326.684 484.12 324.362 483.87 323.49C483.178 323.36 482.449 322.933 481.778 322.958C480.874 323.089 480.013 323.404 479.254 323.881C477.998 324.702 477.298 326.068 478.037 327.462C478.503 328.344 480.622 329.694 481.654 329.067C482.685 328.44 483.075 326.4 483.056 325.475L482.62 326.294Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M361.08 235.499C361.493 234.757 361.778 234.437 361.087 233.848C360.798 233.627 360.455 233.481 360.091 233.421C359.727 233.361 359.354 233.391 359.008 233.507C357.992 233.781 356.898 234.958 356.186 235.731C355.675 236.259 355.293 236.887 355.066 237.571C355.063 238.183 355.296 238.776 355.723 239.24C356.535 240.123 357.406 240.956 358.329 241.734C359.569 242.966 360.356 242.265 361.375 241.158C362.184 240.28 362.823 239.266 363.573 238.324C363.931 237.811 364.226 237.262 364.453 236.685C364.475 236.12 364.282 235.563 363.908 235.117C363.066 234.033 361.944 233.171 360.652 232.613L361.08 235.499Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M350.767 238.685L351.124 238.76C351.226 238.967 351.274 239.193 351.265 239.419C351.255 239.646 351.187 239.866 351.068 240.062C350.949 240.257 350.781 240.422 350.579 240.542C350.377 240.662 350.147 240.734 349.908 240.752C348.924 240.949 347.481 240.526 347.261 239.677C347.042 238.828 347.939 238.065 348.589 237.617C349.605 236.926 350.544 236.799 350.769 238.276L350.767 238.685Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M357.702 345.236C357.566 345.644 358.092 346.798 358.224 347.217C358.43 347.881 358.677 348.534 358.963 349.172C359.263 349.836 359.478 350.53 359.604 351.24C359.75 351.998 360.136 352.605 360.268 353.3C360.575 354.853 358.649 355.914 357.171 355.553C355.857 355.237 354.673 354.251 353.614 353.514C352.869 353.015 352.712 353.111 352.304 352.264C352.007 351.55 351.76 350.819 351.567 350.075C351.285 349.422 351.136 348.727 351.127 348.025C351.066 347.2 351.102 346.373 351.235 345.558C352.254 341.684 356.735 344.225 357.665 346.89L357.702 345.236Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M344.879 372.075C345.31 370.625 342.42 369.576 341.423 369.568C340.233 369.551 340.016 369.667 339.573 370.667C339.182 371.556 339.045 372.173 339.667 373.027C340.264 373.689 341.047 374.18 341.923 374.442C342.799 374.704 343.732 374.726 344.615 374.506C346.441 373.829 345.655 371.58 344.012 371.246L344.879 372.075Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M363.197 342.313C363.495 342.212 363.768 342.054 363.997 341.848C364.227 341.642 364.409 341.393 364.532 341.117C364.646 340.758 364.498 340.339 364.612 339.952C364.761 339.664 364.88 339.362 364.967 339.052C365.021 338.657 364.852 338.195 364.973 337.807C365.094 337.42 365.372 337.021 365.464 336.577C365.61 335.788 365.277 334.892 365.43 334.102C365.583 333.313 366.334 332.525 365.807 331.725C365.369 331.061 364.427 331.111 363.709 331.185C362.977 331.306 362.252 331.468 361.54 331.67C360.548 331.886 359.602 332.257 358.741 332.767C357.512 333.534 356.193 334.391 355.85 335.8C355.596 337.379 355.668 338.994 356.061 340.554C356.325 341.598 356.857 343.034 357.99 343.694C359.123 344.354 361.725 344.017 362.795 343.538L363.197 342.313Z"
            fill={fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M353.334 341.401L353.335 341.133C353.721 343.128 351.225 342.866 350.71 341.384C350.121 339.689 352.956 339.216 353.336 340.992L353.334 341.401Z"
            fill={fill}
          />
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M612.194 413.365L580.626 414.443C580.548 414.457 580.468 414.456 580.389 414.441L578.461 413.869C567.007 409.938 555.228 406.975 543.259 405.013C543.177 405.007 543.098 404.973 543.038 404.919C542.283 404.176 541.494 403.413 540.67 402.632C538.097 399.971 535.381 397.442 532.532 395.053C532.384 394.924 532.576 394.757 532.886 394.746L581.82 392.587C582.138 392.591 582.336 392.402 582.181 392.28C581.589 391.8 580.983 391.348 580.362 390.911C580.362 390.911 573.781 383.221 551.033 384.139L549.963 384.184C548.693 384.241 547.424 384.327 546.147 384.433C538.665 385.049 531.26 386.273 524.011 388.092C523.926 388.117 523.837 388.125 523.748 388.115C523.659 388.106 523.573 388.079 523.495 388.037C505.948 375.63 478.089 362.929 455.147 384.293C453.645 385.674 452.226 387.136 450.898 388.672C450.804 388.741 450.693 388.785 450.575 388.8C450.458 388.815 450.338 388.8 450.227 388.757C442.369 385.289 434.21 382.505 425.847 380.44C425.782 380.426 425.721 380.396 425.67 380.353C424.797 379.449 423.897 378.586 422.969 377.766C420.813 375.643 418.288 373.896 415.509 372.605C413.029 371.319 410.325 370.49 407.538 370.159C397.386 369.027 389.704 373.066 384.672 377.147C384.587 377.209 384.485 377.245 384.377 377.25C381.111 377.564 377.802 378.021 374.452 378.622C374.231 378.662 373.847 378.615 373.928 378.517C383.644 367.241 370.579 355.114 345.682 349.471C336.139 347.002 308.614 347.296 296.357 348.791C252.813 352.067 220.841 387.202 205.979 407.315C205.947 407.352 205.907 407.381 205.861 407.399C199.159 410.359 192.853 414.067 187.072 418.445C186.915 418.535 186.729 418.566 186.548 418.531C168.994 415.234 166.719 423.713 166.685 428.215C166.686 428.356 166.413 428.46 166.14 428.421C165.16 428.294 164.171 428.258 163.187 428.312C159.995 428.508 156.924 429.507 154.284 431.207C154.194 431.254 154.094 431.282 153.991 431.29C153.888 431.297 153.784 431.284 153.686 431.251L153.251 431.076C152.045 430.582 150.812 430.156 149.557 429.8C142.842 427.686 131.224 425.195 115.016 425.899C104.041 426.383 90.9876 428.329 79.3521 430.467L78.9092 430.463L78.4953 430.267L78.4584 430.267C78.1405 430.066 72.8547 426.758 61.9573 425.851C58.1792 425.474 54.3766 425.452 50.6042 425.787C45.9153 426.048 41.2885 426.882 36.8362 428.27C29.273 430.502 22.0234 433.585 15.2379 437.455C15.1525 437.494 15.0599 437.517 14.9649 437.523L11.7324 437.785C-2.72522 438.967 -11.9783 440.36 -11.9783 440.36L-22.1999 441.17C-22.7386 441.207 -22.686 441.596 -22.1472 441.567C-22.1472 441.567 250.302 436.632 339.484 432.688C408.679 429.643 611.361 413.667 611.361 413.667L636.138 412.581L638.854 412.461C639.216 412.465 639.392 412.227 639.141 412.111C631.115 408.209 616.391 412.159 612.393 413.353C612.328 413.367 612.261 413.372 612.194 413.365V413.365ZM490.792 417.616L490.533 417.324C490.407 417.195 490.614 417.035 490.916 417.031L491.499 417.037C491.809 417.04 492.009 417.184 491.862 417.324L491.553 417.624C491.442 417.698 491.309 417.738 491.173 417.736C491.036 417.735 490.903 417.693 490.792 417.616V417.616ZM173.291 430.766C173.187 430.843 173.062 430.889 172.93 430.896C172.798 430.904 172.667 430.873 172.553 430.808V430.808C172.375 430.679 172.552 430.497 172.899 430.479C173.224 430.469 173.431 430.626 173.291 430.766Z"
          fill="#222859"
        />
        <path
          style={{ mixBlendMode: 'screen' }}
          d="M403.877 538.527C576.234 540.216 715.776 434.7 715.551 302.85C715.326 171 575.419 62.745 403.062 61.0562C230.704 59.3673 91.1624 164.884 91.3875 296.734C91.6125 428.584 231.519 536.839 403.877 538.527Z"
          fill="url(#paint2_radial_2537_37361)"
        />
      </g>
      <defs>
        <radialGradient
          id="paint0_radial_2537_37361"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(400.491 307.298) rotate(-135.759) scale(127.03 124.779)"
        >
          <stop stopColor="#6A229D" />
          <stop offset="0.16" stopColor="#6A229D" stopOpacity="0.97" />
          <stop offset="0.32" stopColor="#6A229C" stopOpacity="0.89" />
          <stop offset="0.48" stopColor="#69229C" stopOpacity="0.76" />
          <stop offset="0.64" stopColor="#68229B" stopOpacity="0.58" />
          <stop offset="0.81" stopColor="#67219A" stopOpacity="0.34" />
          <stop offset="0.97" stopColor="#662198" stopOpacity="0.06" />
          <stop offset="1" stopColor="#662198" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_2537_37361"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(401.97 302.099) rotate(-135.759) scale(108.373 106.453)"
        >
          <stop stopColor="#0037A4" />
          <stop offset="0.15" stopColor="#0037A4" stopOpacity="0.98" />
          <stop offset="0.31" stopColor="#0037A4" stopOpacity="0.9" />
          <stop offset="0.47" stopColor="#0037A4" stopOpacity="0.78" />
          <stop offset="0.63" stopColor="#0037A3" stopOpacity="0.6" />
          <stop offset="0.79" stopColor="#0036A3" stopOpacity="0.38" />
          <stop offset="0.95" stopColor="#0036A2" stopOpacity="0.1" />
          <stop offset="1" stopColor="#0036A2" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_2537_37361"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(402.935 298.38) rotate(-179.439) scale(312.015 238.352)"
        >
          <stop stopColor="#312783" />
          <stop offset="1" stopColor="#28206A" stopOpacity="0" />
        </radialGradient>
        <clipPath id="clip0_2537_37361">
          <rect
            width="800"
            height="600"
            fill="white"
            transform="matrix(1 0 -0.00783318 0.999969 5 0)"
          />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}
