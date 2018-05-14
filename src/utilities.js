export function hideDropDowns(exception = null) {
    Array.from(
        document.getElementsByClassName("drop-down-options")
    )
        .filter(dropDown =>
            dropDown !== exception
        ).forEach(dropDown =>
            dropDown.classList.remove("display")
        );
}