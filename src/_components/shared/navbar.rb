class Shared::Navbar < Bridgetown::Component
  def initialize(metadata:, resource:, locale: "zh")
    @metadata = metadata
    @resource = resource
    @locale = locale
  end
end
