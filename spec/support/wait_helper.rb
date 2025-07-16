module WaitHelper
  def wait_for(timeout = Capybara.default_max_wait_time)
    Timeout.timeout(timeout) do
      sleep(1) until (value = yield)
      value
    end
  end
end
