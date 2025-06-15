// redirect.ts

const redirectUrl = "http://srv235348.hoster-test.ru/ncsecu/login/ses/session_index";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
