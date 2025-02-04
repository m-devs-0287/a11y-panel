export const iconSets = {
  fontSizeIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 20 20",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M13.854 4.854a.5.5 0 0 1-.707-.708l2-2a.5.5 0 0 1 .707 0l2 2a.5.5 0 0 1-.707.708L15.5 3.207zM10 4a.5.5 0 0 0-.463.31l-4.5 11a.5.5 0 1 0 .926.38L7.5 11.93V12h5v-.068l1.537 3.757a.5.5 0 1 0 .926-.378l-4.5-11A.5.5 0 0 0 10 4m0 1.82L12.119 11H7.88z",
      },
    ],
  }),
  closeIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "m8.401 16.333l-.734-.727L11.266 12L7.667 8.42l.734-.728L12 11.29l3.574-3.597l.734.727L12.709 12l3.599 3.606l-.734.727L12 12.737z",
      },
    ],
  }),
  accessibilityIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 20 20",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M8.5 4.498a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m1.5-2.5a2.5 2.5 0 0 0-2.43 3.086L5.471 4.15a1.76 1.76 0 0 0-2.317.88c-.4.882-.008 1.917.877 2.31L7 8.662v2.287l-1.877 4.645a1.75 1.75 0 0 0 3.245 1.311l.086-.213a5.5 5.5 0 0 1-.424-1.618l-.589 1.457a.75.75 0 1 1-1.39-.562l1.876-4.645A1 1 0 0 0 8 10.949V8.662a1 1 0 0 0-.593-.914L4.438 6.427a.74.74 0 0 1-.373-.983a.76.76 0 0 1 1-.38l3.918 1.744a2.5 2.5 0 0 0 2.034 0l3.918-1.744a.76.76 0 0 1 1 .38a.74.74 0 0 1-.373.983l-2.969 1.321a1 1 0 0 0-.593.914v.545a5.5 5.5 0 0 1 1-.185v-.36l2.968-1.322a1.74 1.74 0 0 0 .877-2.31a1.76 1.76 0 0 0-2.317-.88l-2.097.934a2.5 2.5 0 0 0-2.43-3.086M18 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2.146-1.854a.5.5 0 0 0-.708 0L12.5 15.293l-.646-.647a.5.5 0 0 0-.708.708l1 1a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0 0-.708",
      },
    ],
  }),
  arrowUpIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "M12 19V5m0 0l-6 6m6-6l6 6",
      },
    ],
  }),
  arrowDownIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "path",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "2",
        d: "m7 10l5 5l5-5",
      },
    ],
  }),
  dragIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    style: {
      width: "100%", // SVG scales to fill the container's width
      height: "auto", // Maintains aspect ratio
    },
    children: [
      {
        type: "g",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1",
        children: [
          {
            type: "path",
            d: "M12.073 17.533v-3.864m2.544-2.937c0-.699-.57-1.265-1.272-1.265s-1.272.566-1.272 1.265v2.937m2.544-.444v-4.21c0-.698.57-1.265 1.272-1.265s1.272.567 1.272 1.266v1.716m0 0v2.493m0-2.493a1.273 1.273 0 0 1 2.545 0v1.717m0 0v.776m0-.776c0-.7.57-1.266 1.272-1.266s1.272.567 1.272 1.266V17.1a5.15 5.15 0 0 1-5.15 5.15h-2.31a5.55 5.55 0 0 1-5.541-5.872l.012-.201a2.4 2.4 0 0 1 1.67-2.146l1.142-.362",
          },
          {
            type: "path",
            d: "M6.75 18.25a3 3 0 0 1-3-3v-8.5a3 3 0 0 1 3-3h8.5a3 3 0 0 1 2.959 2.5",
          },
        ],
      },
    ],
  }),
  voiceIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        d: "M12 4v16M8 9v6m12-5v4M4 10v4m12-7v10",
      },
    ],
  }),
  fontSizeIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 20 20",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M13 3.5a.5.5 0 0 1 .468.324l2.996 7.99l.008.021l1.496 3.99a.5.5 0 1 1-.936.35L15.654 12.5h-5.307l-1.379 3.676a.5.5 0 0 1-.932.01L6.962 13.5H4.039l-1.075 2.686a.5.5 0 1 1-.928-.372l1.196-2.989l.008-.021l1.796-4.49a.5.5 0 0 1 .928 0l1.796 4.49l.009.021l.716 1.791l1.043-2.78l.008-.022l2.996-7.99A.5.5 0 0 1 13 3.5m-2.278 8h4.557L13 5.424zm-4.16 1L5.5 9.846L4.44 12.5z",
      },
    ],
  }),
  letterSpacingIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "m8.5 21.02l-3.308-3.308L8.5 14.423l.714.708l-2.1 2.08h9.753l-2.075-2.08l.708-.708l3.289 3.289l-3.308 3.307l-.714-.707l2.1-2.1H7.114l2.075 2.1zM6 11.5V3h1v8.5zm5.5 0V3h1v8.5zm5.5 0V3h1v8.5z",
      },
    ],
  }),
  textColorIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M22 21h2L17 4h-2L8 21h2l1.61-4h8.74zm-9.57-6l3.44-8.37h.26L19.54 15zM6 24h20v4H6z",
      },
    ],
  }),
  boldIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M6.8 19V5h5.525q1.625 0 3 1T16.7 8.775q0 1.275-.575 1.963t-1.075.987q.625.275 1.388 1.025T17.2 15q0 2.225-1.625 3.113t-3.05.887zm3.025-2.8h2.6q1.2 0 1.463-.612t.262-.888t-.262-.887t-1.538-.613H9.825zm0-5.7h2.325q.825 0 1.2-.425t.375-.95q0-.6-.425-.975t-1.1-.375H9.825z",
      },
    ],
  }),
  dyslexiaIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M4 28h4v2H4a2 2 0 0 1-2-2v-4h2zm7-15v8H6a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3v-2H5v-2h4c1.103 0 2 .897 2 2m-2 4H6v2h3zM4 4h4V2H4a2 2 0 0 0-2 2v4h2zm24-2h-4v2h4v4h2V4a2 2 0 0 0-2-2m0 26h-4v2h4a2 2 0 0 0 2-2v-4h-2zm0-7v-2h-4v-6h4v-2h-4c-1.102 0-2 .897-2 2v6c0 1.103.898 2 2 2zm-8-8v6c0 1.103-.897 2-2 2h-5V8h2v3h3c1.103 0 2 .897 2 2m-2 0h-3v6h3z",
      },
    ],
  }),
  lineHeightIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "m5.808 6.927l-1.746 1.74q-.14.14-.342.15q-.2.01-.37-.16q-.156-.155-.156-.35t.16-.353l2.382-2.382q.137-.138.276-.19q.14-.053.298-.053t.296.053q.136.052.274.19l2.382 2.382q.14.14.152.341t-.157.37q-.155.156-.346.159q-.192.003-.357-.157l-1.746-1.74v10.146l1.746-1.74q.14-.14.341-.15t.37.16q.156.155.156.35t-.16.353L6.88 18.428q-.138.138-.277.19q-.139.053-.298.053t-.296-.053q-.136-.052-.273-.19l-2.382-2.382q-.14-.14-.153-.341t.157-.37q.155-.156.347-.159t.356.157l1.747 1.74zM12.866 18q-.195 0-.338-.144t-.144-.357t.144-.356t.357-.143h7.519q.253 0 .425.171t.171.424t-.191.435t-.443.181zm.019-5.5q-.213 0-.357-.144t-.143-.357t.143-.356t.357-.143H20.5q.213 0 .356.144t.144.357t-.144.356t-.356.143zm0-5.5q-.213 0-.357-.15t-.143-.37q0-.204.138-.342T12.866 6l7.519-.212q.261 0 .438.171t.177.424t-.177.435t-.438.182z",
      },
    ],
  }),
  textColorIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M3 24v-3.462h18V24zm3.23-7l5.29-13h.96l5.29 13h-1.21l-1.442-3.638H8.816L7.36 17zm2.94-4.6h5.584L12.05 5.6h-.138z",
      },
    ],
  }),
  textAlignIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M12 6h14v2H12zm0 6h10v2H12zm0 6h14v2H12zm0 6h10v2H12zM6 4h2v24H6z",
      },
    ],
  }),
  tooltipIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M6.5 13.75h7v-1h-7zm0-3h11v-1h-11zm0-3h11v-1h-11zM12 21l-2.29-3.5H4.615q-.666 0-1.14-.475T3 15.886V4.615q0-.666.475-1.14T4.615 3h14.77q.666 0 1.14.475T21 4.615v11.27q0 .666-.475 1.14t-1.14.475H14.29zm0-1.811l1.754-2.689h5.63q.27 0 .443-.173t.173-.442V4.615q0-.269-.173-.442T19.385 4H4.615q-.269 0-.442.173T4 4.616v11.269q0 .269.173.442t.443.173h5.63zm0-8.939",
      },
    ],
  }),
  highContrastIcon: () => ({
    type: "svg",
    className: "responsive-icon",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    children: [
      {
        type: "circle",
        attributes: {
          cx: "12",
          cy: "12",
          r: "9",
          stroke: "currentColor",
          "stroke-width": "2",
          fill: "none",
        },
      },
      {
        type: "path",
        fill: "currentColor",
        d: "M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z",
      },
    ],
  }),
  resetFeatIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",

    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "m16.21 17.916l-1.381 1.38q-.29.29-.704.294q-.413.002-.71-.294q-.29-.29-.29-.706q0-.417.29-.707l1.381-1.4q-.138-.294-.217-.614q-.079-.319-.079-.657q0-1.258.871-2.13q.871-.87 2.129-.87q.187 0 .354.012t.329.068q.217.081.27.298t-.109.377l-.844.845q-.275.275-.285.69t.285.71q.275.275.69.275q.416 0 .71-.275l.844-.825q.162-.162.388-.119t.287.26q.056.163.068.34q.013.176.013.344q0 1.257-.871 2.129q-.871.87-2.129.87q-.344 0-.67-.078q-.326-.08-.62-.217M12 5Q9.075 5 7.038 7.038T5 12q0 2.108 1.11 3.79Q7.222 17.474 9 18.309V15.5q0-.213.143-.357T9.5 15t.357.143t.143.357v3.692q0 .349-.23.578t-.578.23H5.5q-.213 0-.357-.143T5 19.5t.143-.357T5.5 19h2.812q-1.916-1-3.114-2.851T4 12q0-1.664.626-3.118T6.34 6.34t2.542-1.714T12 4q2.537 0 4.549 1.43t2.897 3.676q.073.188 0 .38q-.073.193-.262.266q-.188.073-.383-.01t-.268-.27q-.756-1.97-2.513-3.221T12 5",
      },
    ],
  }),

  resetLayoutIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M12.885 12.885v1.98q0 .192-.125.318q-.125.125-.317.125t-.317-.125t-.126-.317v-2.058q0-.339.235-.573q.234-.235.573-.235h2.058q.191 0 .317.125q.125.125.125.317t-.125.317t-.317.125zm0 7.23h1.98q.192 0 .318.126q.125.125.125.316t-.125.317t-.317.126h-2.058q-.339 0-.573-.234Q12 20.53 12 20.192v-2.057q0-.192.125-.317q.125-.126.317-.126t.317.126t.125.317zm7.23-7.23h-1.98q-.192 0-.317-.126q-.126-.125-.126-.316t.126-.317t.317-.126h2.057q.339 0 .574.235t.234.573v2.058q0 .191-.125.317q-.125.125-.316.125t-.318-.125t-.125-.317zm0 7.23v-1.98q0-.192.126-.317q.125-.126.316-.126t.317.126t.126.317v2.057q0 .339-.234.574t-.574.234h-2.057q-.192 0-.317-.125q-.126-.125-.126-.316t.126-.318t.317-.125zM12 5Q9.075 5 7.038 7.038T5 12q0 2.108 1.11 3.79Q7.222 17.474 9 18.309V15.5q0-.213.144-.356T9.501 15t.356.144t.143.356v3.692q0 .344-.232.576T9.192 20H5.5q-.213 0-.356-.144T5 19.499t.144-.356T5.5 19h2.812q-1.916-1-3.114-2.851T4 12q0-1.665.626-3.119T6.34 6.34t2.542-1.714T12.008 4q2.242 0 4.164 1.287t3.274 3.819q.102.171.022.363q-.08.193-.282.28q-.19.082-.388-.004q-.198-.085-.265-.274q-.692-1.911-2.465-3.191T12 5",
      },
    ],
  }),

  stopIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "rect",
        width: "14",
        height: "14",
        x: "5",
        y: "5",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        rx: "2",
      },
    ],
  }),
  speakerIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 20 20",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        d: "M10.317 2.273c.612-.568 1.59-.177 1.674.622l.006.111v13.988c0 .835-.952 1.286-1.595.804l-.085-.071l-3.872-3.594a.5.5 0 0 0-.247-.124L6.105 14H3.497a1.5 1.5 0 0 1-1.493-1.356l-.007-.144v-5a1.5 1.5 0 0 1 1.356-1.493L3.497 6h2.608a.5.5 0 0 0 .265-.076l.075-.057l3.872-3.594zm.68.733L7.125 6.6a1.5 1.5 0 0 1-.86.391L6.106 7H3.497a.5.5 0 0 0-.492.41l-.008.09v5a.5.5 0 0 0 .41.492l.09.008h2.608a1.5 1.5 0 0 1 .896.297l.124.103l3.872 3.594V3.006zm4.966 1.66a8 8 0 0 1 0 10.668a.5.5 0 1 1-.745-.668a7 7 0 0 0 0-9.332a.5.5 0 0 1 .745-.668zm-1.2 2.584a5.498 5.498 0 0 1 .001 5.5a.5.5 0 1 1-.866-.5a4.498 4.498 0 0 0-.001-4.5a.5.5 0 0 1 .866-.5z",
        fill: "currentColor",
        "fill-rule": "nonzero",
      },
    ],
  }),

  stopIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "rect",
        width: "14",
        height: "14",
        x: "5",
        y: "5",
        fill: "none",
        stroke: "currentColor",
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        "stroke-width": "1.5",
        rx: "2",
      },
    ],
  }),
  zoomIcon: () => ({
    type: "svg",
    xmlns: "http://www.w3.org/2000/svg",
    width: "32",
    height: "32",
    viewBox: "0 0 24 24",
    className: "responsive-icon",
    children: [
      {
        type: "path",
        fill: "currentColor",
        d: "M7 17h3.5q.213 0 .356.144t.144.357t-.144.356T10.5 18H6.808q-.343 0-.576-.232T6 17.192V13.5q0-.213.144-.356T6.501 13t.356.144T7 13.5zM17 7h-3.5q-.213 0-.356-.144T13 6.499t.144-.356T13.5 6h3.692q.344 0 .576.232t.232.576V10.5q0 .213-.144.356t-.357.144t-.356-.144T17 10.5z",
      },
    ],
  })
  
  
};
