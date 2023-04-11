import { Effect } from 'postprocessing'

const fragmentShader = /* glsl */ `
    void mainUv(inout vec2 uv) {
        uv.y += sin(uv.x);
    }

    void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
        vec4 color = inputColor;
        color.rgb *= vec3(0.1, 1.0, 0.1);

        outputColor = inputColor;
    }
`

export default class GooeyEffect extends Effect {
  constructor(props) {
    super(
        'GooeyEffect',
        fragmentShader,
        {

        }
    )

    console.log(props)
  }
}