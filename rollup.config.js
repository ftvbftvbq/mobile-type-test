import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
export default {
    input: 'src/index.js',
    output: {
        file: 'lib/index.min.js',
        format: 'umd',
        name: 'testMobile'
    },
    plugins: [
        babel({
            exclude: 'node_modules/**' // 只编译我们的源代码
        }),
        uglify.uglify()
    ]
}