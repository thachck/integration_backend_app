Capybara.register_driver :headless_chrome do |app|
  browser_options = ::Selenium::WebDriver::Chrome::Options.new
  browser_options.add_argument "--no-sandbox"
  browser_options.add_argument "--window-size=1920,1080"
  browser_options.add_argument "--disable-site-isolation-trials"
  browser_options.add_argument "--disable-dev-shm-usage"
  browser_options.add_argument "--disable-gpu"
  browser_options.add_argument("--disable-animations")
  browser_options.add_argument("--disable-css-animations")
  browser_options.add_argument "--headless"
  service = ::Selenium::WebDriver::Service.chrome(port: 9515)
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: browser_options, service: service)
end

Capybara.javascript_driver = :headless_chrome

Capybara.configure do |config|
  config.run_server = true
  config.server_host = "localhost"
  config.server_port = 4000
  config.server = :puma, {Silent: true, Threads: "5:5"}
end

Capybara.default_max_wait_time = 20
Capybara.app_host = "http://localhost:5173"
