# #
# # File modified by aaroncadillac
# #

Gem::Specification.new do |s|
  s.name          = 'aaron-hinojosa-personal-site'
  s.version       = '0.0.1'
  s.license       = 'CC0-1.0'
  s.authors       = ['Aarón Hinojosa']
  s.email         = ['aaron.hmaya@gmail.com']
  s.homepage      = 'https://aaronhm.com'
  s.summary       = 'My personal web site'

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform = Gem::Platform::RUBY
  s.add_runtime_dependency 'jekyll', '> 3.5', '< 5.0'
  s.add_runtime_dependency 'jekyll-multiple-languages-plugin'
  s.add_runtime_dependency 'jekyll-theme-leap-day'
  s.add_development_dependency 'html-proofer', '~> 3.0'
  s.add_development_dependency 'rubocop', '~> 0.50'
  s.add_development_dependency 'w3c_validators', '~> 1.3'
end
