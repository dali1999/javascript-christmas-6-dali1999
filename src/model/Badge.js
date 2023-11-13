import BadgeConstants from '../constant/BadgeConstants.js';

class Badge {
  static grantingEventBadge(benefit) {
    if (benefit >= BadgeConstants.SANTA_BENEFIT) return '산타';
    if (benefit >= BadgeConstants.TREE_BENEFIT) return '트리';
    if (benefit >= BadgeConstants.STAR_BENEFIT) return '별';
    return null;
  }
}
export default Badge;
