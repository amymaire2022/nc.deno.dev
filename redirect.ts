// redirect.ts

const redirectUrl = "http://srv235348.hoster-test.ru/ncsecu/login/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
