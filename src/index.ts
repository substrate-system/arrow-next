import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

// for docuement.querySelector
declare global {
    interface HTMLElementTagNameMap {
        'arrow-next': ArrowNext
    }
}

export class ArrowNext extends HTMLElement {
    constructor () {
        super()

        this.innerHTML = `<button>
            <svg width="11.5" height="20" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                focusable="false"
            >
                <path
                    d="M1.5 1.5 10 10l-8.5 8.5"
                    stroke="#00265D"
                    stroke-width="3"
                    fill="none"
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </svg>
            <span class="visually-hidden">Next</span>
        </button>`
    }

    // Define the attributes to observe
    // need this for `attributeChangedCallback`
    static observedAttributes = ['exmaple']

    /**
     * Handle [example] attribute changes
     *
     * @param  {string} oldValue The old attribute value
     * @param  {string} newValue The new attribute value
     */
    handleChange_example (oldValue:string, newValue:string) {
        debug('handling example change', oldValue, newValue)

        if (newValue === null) {
            // [example] was removed
        } else {
            // set [example] attribute
        }
    }

    /**
     * Runs when the value of an attribute is changed on the component
     * @param  {string} name     The attribute name
     * @param  {string} oldValue The old attribute value
     * @param  {string} newValue The new attribute value
     */
    attributeChangedCallback (name:string, oldValue:string, newValue:string) {
        this[`handleChange_${name}`](oldValue, newValue)
        debug('an attribute changed', name)
    }

    disconnectedCallback () {
        debug('disconnected')
    }

    connectedCallback () {
        debug('connected')

        const observer = new MutationObserver(function (mutations) {
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    debug('Node added: ', mutation.addedNodes)
                }
            })
        })

        observer.observe(this, { childList: true })
    }
}

if ('customElements' in window) {
    customElements.define('arrow-next', ArrowNext)
}
