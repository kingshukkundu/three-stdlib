import { Path, LatheGeometry } from 'three'

const CapsuleGeometry = /* @__PURE__ */ (() => {
  class CapsuleGeometry extends LatheGeometry {
    constructor(radius = 1, length = 1, capSegments = 4, radialSegments = 8) {
      const path = new Path()
      path.absarc(0, -length / 2, radius, Math.PI * 1.5, 0)
      path.absarc(0, length / 2, radius, 0, Math.PI * 0.5)

      super(path.getPoints(capSegments), radialSegments)

      this.type = 'CapsuleGeometry'

      this.parameters = {
        radius: radius,
        height: length,
        capSegments: capSegments,
        radialSegments: radialSegments,
      }
    }

    static fromJSON(data) {
      return new CapsuleGeometry(data.radius, data.length, data.capSegments, data.radialSegments)
    }
  }

  return CapsuleGeometry
})()

export { CapsuleGeometry }
