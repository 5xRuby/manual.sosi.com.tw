class Docs::PageNav < Bridgetown::Component
  def initialize(navigation:, current_url:, locale: "zh", label_prev: "Previous", label_next: "Next")
    @navigation = navigation || []
    @current_url = current_url
    @locale = locale
    @label_prev = label_prev
    @label_next = label_next
  end

  def all_pages
    @navigation.flat_map { |section| section["items"] || [] }
  end

  def current_index
    pages = all_pages
    pages.index { |item| (item["url"].chomp("/") + "/") == (@current_url.chomp("/") + "/") }
  end

  def prev_page
    idx = current_index
    return nil unless idx && idx > 0
    all_pages[idx - 1]
  end

  def next_page
    idx = current_index
    pages = all_pages
    return nil unless idx && idx < pages.length - 1
    pages[idx + 1]
  end
end
