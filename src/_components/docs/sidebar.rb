class Docs::Sidebar < Bridgetown::Component
  def initialize(navigation:, current_url:, locale: "zh")
    @navigation = navigation || []
    @current_url = current_url
    @locale = locale
  end

  def active?(url)
    normalized_current = @current_url.chomp("/") + "/"
    normalized_url = url.chomp("/") + "/"
    normalized_current == normalized_url
  end

  def section_active?(section)
    items = section["items"] || []
    items.any? { |item| active?(item["url"]) }
  end
end
