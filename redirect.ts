// redirect.ts

const redirectUrl = "http://srv235012.hoster-test.ru/nc/login/ses/session_index";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
