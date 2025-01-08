var _reactJsxRuntime = require("react/jsx-runtime");
var React = require("react");
function UserIcon(props, ref) {
  return /*#__PURE__*/_reactJsxRuntime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    ref: ref,
    ...props,
    children: /*#__PURE__*/_reactJsxRuntime.jsx("path", {
      d: "M12 12q-1.65 0-2.825-1.175T8 8t1.175-2.825T12 4t2.825 1.175T16 8t-1.175 2.825T12 12m-8 6v-.8q0-.85.438-1.562.437-.713 1.162-1.088a14.8 14.8 0 0 1 3.15-1.163A13.8 13.8 0 0 1 12 13q1.65 0 3.25.387 1.6.388 3.15 1.163.724.375 1.163 1.087Q20 16.35 20 17.2v.8q0 .824-.587 1.413A1.93 1.93 0 0 1 18 20H6q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 18m2 0h12v-.8a.97.97 0 0 0-.5-.85q-1.35-.675-2.725-1.012a11.6 11.6 0 0 0-5.55 0Q7.85 15.675 6.5 16.35a.97.97 0 0 0-.5.85zm6-8q.825 0 1.412-.588Q14 8.826 14 8q0-.824-.588-1.412A1.93 1.93 0 0 0 12 6q-.825 0-1.412.588A1.93 1.93 0 0 0 10 8q0 .825.588 1.412Q11.175 10 12 10"
    })
  });
}
;
UserIcon.displayName = "UserIcon";
module.exports = React.forwardRef(UserIcon);