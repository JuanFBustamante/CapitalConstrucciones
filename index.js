
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;

    if (offset > 75)
        nav.classList.add('scroll')
    // else
    //     nav.classList.remove('scroll')
});

const preloaderWrapper = document.querySelector(".preloader-wrapper")
window.addEventListener('load', function () {
    preloaderWrapper.classList.add('fade-out-animation')
})

const $form = document.querySelector("#form")

$form.addEventListener("submit", handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json"
        }
    })



    if (response.ok) {
        $form.reset()
        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado exitosamente',
            text: 'Lo contactaremos en la brevedad',
            confirmButtonColor: '#db7304',
            confirmButtonText: 'Cerrar'
        })
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error al enviar mensaje',
            text: 'Verifique que los datos sean correctos',
            confirmButtonColor: '#db7304',
            confirmButtonText: 'Cerrar'
        })
    }
}