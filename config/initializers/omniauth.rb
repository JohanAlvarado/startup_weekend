OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '515636818562518', 'fc5984f9a2b77d5c087e2fe48a1e7894'
end
