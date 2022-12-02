import { Notyf } from 'notyf'
import "notyf/notyf.min.css";

export const useNotyf =() => {
    const notyf = new Notyf({
        duration: 2000,
        position: {
            x: 'right',
            y: 'bottom',
        },
        types: [
            {
                type: 'warning',
                background: 'orange',
                icon: {
                    className: 'fas fa-hand-paper',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'info',
                background: 'blue',
                icon: {
                    className: 'fas fa-info-circle',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'primary',
                background: 'blue',
                icon: {
                    className: 'fas fa-car-crash',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'accent',
                background: 'red',
                icon: {
                    className: 'fas fa-car-crash',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'purple',
                background: 'purple',
                icon: {
                    className: 'fas fa-check',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'blue',
                background: 'blue',
                icon: {
                    className: 'fas fa-check',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'green',
                background: 'green',
                icon: {
                    className: 'fas fa-check',
                    tagName: 'i',
                    text: '',
                },
            },
            {
                type: 'orange',
                background: 'orange',
                icon: {
                    className: 'fas fa-check',
                    tagName: 'i',
                    text: '',
                },
            },
        ],
    })

    return {
        dismiss: (notification) => {
            notyf.dismiss(notification)
        },
        dismissAll: () => {
            notyf.dismissAll()
        },
        success: (payload) => {
            notyf.success(payload)
        },
        error: (payload) => {
            return notyf.error(payload)
        }
    }
}