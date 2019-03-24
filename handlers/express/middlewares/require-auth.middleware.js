const getUser = authorization => {
  try {
    return JSON.parse(authorization);
  } catch (err) {
    return null;
  }
};

const onUnauthorized = res => {
  res.status(401).end('Unauthorized');
};

module.exports = (req, res, next) => {
  req.user = getUser(req.headers.authorization);

  if (!req.user) return onUnauthorized(res);
  return next();
};
