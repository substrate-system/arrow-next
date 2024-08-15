import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example test', async t => {
    document.body.innerHTML += `
        <arrow-next class="test">
        </arrow-next>
    `

    const el = await waitFor('arrow-next svg')

    t.ok(el, 'should find the element')
})
