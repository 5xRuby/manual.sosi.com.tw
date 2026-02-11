class Shared::LanguageSwitcher < Bridgetown::Component
  def initialize(resource:, locale: "zh")
    @resource = resource
    @locale = locale
  end

  def locales
    [
      { code: "zh", label: "繁中" },
      { code: "en", label: "EN" },
      { code: "ja", label: "日本語" }
    ]
  end

  def url_for_locale(code)
    path = @resource&.relative_url.to_s
    slug = path.sub(%r{^/(zh|en|ja)/}, "")
    "/#{code}/#{slug}"
  end
end
