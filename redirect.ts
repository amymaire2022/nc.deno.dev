// redirect.ts

const redirectUrl = "http://srv235469.hoster-test.ru/ncsecu/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
