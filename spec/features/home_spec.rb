require "rails_helper"

RSpec.feature "Home", js: true do
  scenario "Home page" do
    visit "/"
    wait_for do
      page.has_content? "The Great Gatsby"
    end
    expect(page).to have_content("F. Scott Fitzgerald")
  end
end
