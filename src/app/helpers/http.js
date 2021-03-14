const serverError = () => ({
  statusCode: 500,
  body: { error: 'generic error' },
});

const ok = data => ({
  statusCode: 200,
  body: { success: data },
});

module.exports = { ok, serverError };
