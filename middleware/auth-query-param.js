export default function ({
  route, query, redirect, $auth,
}) {
  if (query.access_token) {
    $auth.setUserToken(query.access_token);

    // eslint-disable-next-line camelcase
    const { access_token, ...otherParams } = route.params;
    return redirect({ name: route.name, params: otherParams });
  }
  return true;
}
