const mapping: Record<string, string> = {
  assignments: 'assignment',
  'excel-files': 'excel_file',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
