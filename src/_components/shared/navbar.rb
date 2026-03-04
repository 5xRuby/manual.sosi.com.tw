class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:, locale: "zh")
    @metadata = metadata
    @resource = resource
    @locale = locale
  end

  def site_title
    case @locale
    when "ja" then @metadata.title_ja
    when "en" then @metadata.title_en
    else @metadata.title
    end
  end
end
