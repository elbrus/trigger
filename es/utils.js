var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

export function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return _extends({}, baseAlign, align);
}

export function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

export function saveRef(name, component) {
  this[name] = component;
}