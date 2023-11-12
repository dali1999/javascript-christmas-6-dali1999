class Badge {
  static grantingEventBadge(benefit) {
    if (benefit >= 20000) return '산타';
    if (benefit >= 10000) return '트리';
    if (benefit >= 5000) return '별';
    return null;
  }
}
export default Badge;
