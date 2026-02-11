class Builders::I18nHelpers < SiteBuilder
  def build
    helper "ui_t" do |key|
      locale = _detect_locale
      data = site.data.dig("i18n", locale)
      next key.to_s unless data

      keys = key.to_s.split(".")
      result = keys.reduce(data) do |hash, k|
        break nil unless hash.is_a?(Hash)
        hash[k]
      end
      result || key.to_s
    end

    helper "current_locale" do
      _detect_locale
    end

    helper "locale_url" do |path|
      "/#{_detect_locale}/#{path.sub(%r{^/}, '')}"
    end

    helper "alternate_locale_urls" do
      path = _helper_resource&.relative_url.to_s
      slug = path.sub(%r{^/(zh|en|ja)/}, "")
      %w[zh en ja].map do |loc|
        { "locale" => loc, "url" => "/#{loc}/#{slug}" }
      end
    end

    helper "locale_nav" do
      site.data.dig("navigation", _detect_locale) || []
    end
  end

  private

  def _helper_resource
    helpers&.view&.resource
  rescue
    nil
  end

  def _detect_locale
    res = _helper_resource
    if res&.data&.lang
      res.data.lang.to_s
    else
      path = res&.relative_url.to_s
      case path
      when %r{^/en/} then "en"
      when %r{^/ja/} then "ja"
      else "zh"
      end
    end
  end
end
