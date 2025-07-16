source "https://rubygems.org"

gem "rails", "~> 8.0.2"
gem "pg"
gem "puma"
gem "tzinfo-data"

gem "solid_cache"
gem "solid_queue"
gem "solid_cable"

gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false
gem "rack-cors"

group :development, :test do
  gem "debug", require: "debug/prelude"
  gem "brakeman", require: false
  gem "standard", ">= 1.35.1"
  gem "standard-rails"
  gem "rspec-rails"
  gem "factory_bot_rails"
  gem "faker"
end

group :test do
  gem "capybara"
  gem "database_cleaner-active_record"
  gem "selenium-webdriver"
end
