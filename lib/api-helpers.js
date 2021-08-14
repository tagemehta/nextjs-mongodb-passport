const sensitiveFields = ['email', 'hash', '_id'];
export function extractUser(user) {
  if (!user) return null;
  const obj = {};
  Object.keys(user).forEach((key) => {
    if (!sensitiveFields.includes(key)) obj[key] = user[key];
  });
  return obj;
}