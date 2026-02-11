class Docs::Screenshot < Bridgetown::Component
  def initialize(src:, alt: "", caption: nil)
    @src = src
    @alt = alt
    @caption = caption
  end
end
