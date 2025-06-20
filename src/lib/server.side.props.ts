export async function getServerSideProps(context: any) {
  const { roles } = context.req.auth || {};
  return { props: { roles: roles || [] } };
}
