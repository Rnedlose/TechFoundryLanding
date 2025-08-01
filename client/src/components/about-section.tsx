export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-4xl text-deep-navy mb-4">
              About Rodney
            </h2>
            <div className="w-24 h-1 bg-accent-teal mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-deep-navy via-steel-gray to-deep-navy rounded-2xl shadow-2xl p-12 aspect-square flex items-center justify-center overflow-hidden">
                {/* Circuit Board Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Horizontal Lines */}
                    <line
                      x1="0"
                      y1="100"
                      x2="400"
                      y2="100"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-teal"
                    />
                    <line
                      x1="0"
                      y1="200"
                      x2="400"
                      y2="200"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-orange"
                    />
                    <line
                      x1="0"
                      y1="300"
                      x2="400"
                      y2="300"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-teal"
                    />

                    {/* Vertical Lines */}
                    <line
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-orange"
                    />
                    <line
                      x1="200"
                      y1="0"
                      x2="200"
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-teal"
                    />
                    <line
                      x1="300"
                      y1="0"
                      x2="300"
                      y2="400"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-accent-orange"
                    />

                    {/* Circuit Nodes */}
                    <circle
                      cx="100"
                      cy="100"
                      r="8"
                      fill="currentColor"
                      className="text-accent-teal"
                    />
                    <circle
                      cx="200"
                      cy="100"
                      r="6"
                      fill="currentColor"
                      className="text-accent-orange"
                    />
                    <circle
                      cx="300"
                      cy="100"
                      r="8"
                      fill="currentColor"
                      className="text-accent-teal"
                    />
                    <circle
                      cx="100"
                      cy="200"
                      r="6"
                      fill="currentColor"
                      className="text-accent-orange"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="10"
                      fill="currentColor"
                      className="text-white"
                    />
                    <circle
                      cx="300"
                      cy="200"
                      r="6"
                      fill="currentColor"
                      className="text-accent-orange"
                    />
                    <circle
                      cx="100"
                      cy="300"
                      r="8"
                      fill="currentColor"
                      className="text-accent-teal"
                    />
                    <circle
                      cx="200"
                      cy="300"
                      r="6"
                      fill="currentColor"
                      className="text-accent-orange"
                    />
                    <circle
                      cx="300"
                      cy="300"
                      r="8"
                      fill="currentColor"
                      className="text-accent-teal"
                    />
                  </svg>
                </div>

                {/* Central Tech Symbol */}
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-accent-teal/20 rounded-full flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-accent-teal"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 10.5V15.5h2V17.5c5.16-.76 9-4.95 9-10.5V7l-10-5z" />
                      <circle cx="12" cy="10" r="2" />
                      <path d="M12 6v2m0 4v2m-3-3h2m4 0h2" />
                    </svg>
                  </div>
                  <div className="text-white/80 text-sm font-semibold">
                    Data • Cloud • Automation
                  </div>
                </div>

                {/* Animated Particles */}
                <div className="absolute top-8 left-8 w-2 h-2 bg-accent-teal rounded-full animate-pulse"></div>
                <div
                  className="absolute top-16 right-12 w-3 h-3 bg-accent-orange rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div
                  className="absolute bottom-12 left-16 w-2 h-2 bg-accent-teal rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                ></div>
                <div
                  className="absolute bottom-8 right-8 w-2 h-2 bg-accent-orange rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                ></div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-steel-gray leading-relaxed font-medium">
                I am a versatile data and software engineer with a proven
                ability to adapt in fast-changing environments. From cloud
                architecture to automation and app development, I've leveraged a
                wide-ranging knowledge of modern technologies to deliver
                innovative, tailored solutions for businesses of all sizes. My
                passion for continuous learning and creative problem-solving
                ensures every project meets real-world needs and exceeds
                expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
