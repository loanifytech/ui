import React from 'react'

import { IIcon } from '@interfaces/core'
import { SvgIcon } from '@mui/material'

export const MultichainIcon: React.FC<IIcon> = ({
  fill = '#FFFFFF',
  sx,
  ...rest
}) => (
  <SvgIcon
    viewBox="0 0 40 40"
    sx={{ fill: 'none', width: '24px', height: '24px', ...sx }}
    {...rest}
  >
    <path
      d="M39.4016 24.8381C36.7301 35.5525 25.877 42.0731 15.1601 39.4012C4.44772 36.7301 -2.07358 25.8775 0.599038 15.1639C3.26931 4.44838 14.1225 -2.07268 24.836 0.598468C35.5521 3.26961 42.073 14.1234 39.4013 24.8383L39.4015 24.8381H39.4016Z"
      fill={fill}
    />
    <rect x="6" y="13" width="28" height="14" fill="url(#pattern1)" />
    <defs>
      <pattern
        id="pattern1"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use
          xlinkHref="#image1_2908_300495"
          transform="matrix(0.00444444 0 0 0.00877193 -0.306667 -0.596491)"
        />
      </pattern>
      <image
        id="image1_2908_300495"
        width="845"
        height="250"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA00AAAD6CAYAAAB9JKx8AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAADTaADAAQAAAABAAAA+gAAAADkHix1AAA4zElEQVR4Ae3d347c2J3YcbK6R95snNnSjr17aeoJXHoCVV9atqyS1xdGEEDsGMECCYxp7e5MZhcB1AKC7KzHiVo3e5OLpoAgGCAZT81q0nMp6gmm/ATiXtpeR2XHu+vRdBXz+3U3peruYhXP4SGLrPoe4Igs8vz9kN3Nn1jF8jwSAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggsEvAX7WQfArMC7w1eBN6xF8xuy9Z/tz0eHQyvjbPXLF8LhN/5sn988nL79UZZ25564+jIH53byAsEEEAAAQQQQACBxgkQNDXukDRjQBogvXzp9be86Y3U6/RkVJqXpjRN461OOvI6nWcvt8bxpgVSJwFSp9NPp/6NzqlZV9GmJ3Lnf9zS1y+T1PNGUv7Zy4kX/y8CqaXnGQUQQAABBBBAAIE6BV5fttXZK301UmBv8Ly7/UU39HzvrgywUJC0bCISDAwlf/Lfjq5Gy8q2db8GSmnq3019fyBz6KYCeDEtCZpeFRcrTYnkYbrlPfpw6Os6CQEEEEAAAQQQQGCFApev7lY4GLpejYDeVZq8nN5P085ArvdP7ow4H0nqjT1/+uj4ym8O1uXuU3jrOJz6/ttyG+lcgOkgaHrFL0FUvJ16D/7Hp378aiMrCCCAAAIIIIAAArUKEDTVyt2szvTO0pUv37w/TTt7tY1MgyfPe/CTz64e1Nan4470zpKYHfq+F5zdGTrXg8ugSRvWPjR48re8Xe48naPmBQIIIIAAAgggUIsAQVMtzM3r5N1bLwbT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jX637Y02KEi65MGGRggEMgrNmuKTf/lnUwUCmbjmvKR/E8d5O9leq0AgvWmelzhO81TYhgACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCLRY4P8DbEQEu4MmSSwAAAAASUVORK5CYII="
      />
    </defs>
  </SvgIcon>
)