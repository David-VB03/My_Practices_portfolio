  // ===== FUNCIÓN PARA BUSCAR =====
    function buscarTarjetas() {
        // Obtener el texto de búsqueda
        const input = document.getElementById('buscadorInput');
        const textoBusqueda = input.value.toLowerCase().trim();
        
        // Obtener todas las tarjetas
        const tarjetas = document.querySelectorAll('.project-card');
        let hayResultados = false;
        
        // Recorrer cada tarjeta
        tarjetas.forEach(function(tarjeta) {
            // Obtener el texto de la tarjeta (título y descripción)
            const textoCompleto = tarjeta.textContent.toLowerCase();
            
            // Si el texto de búsqueda está vacío, mostrar todas
            if (textoBusqueda === '') {
                tarjeta.classList.remove('oculta');
                hayResultados = true;
            } 
            // Si coincide con la búsqueda, mostrar, sino ocultar
            else if (textoCompleto.includes(textoBusqueda)) {
                tarjeta.classList.remove('oculta');
                hayResultados = true;
            } else {
                tarjeta.classList.add('oculta');
            }
        });
        
        // Mostrar u ocultar mensaje de "sin resultados"
        const mensajeSinResultados = document.getElementById('sinResultados');
        if (hayResultados || textoBusqueda === '') {
            mensajeSinResultados.classList.remove('visible');
        } else {
            mensajeSinResultados.classList.add('visible');
        }
    }

    // ===== FUNCIÓN PARA LIMPIAR LA BÚSQUEDA =====
    function limpiarBusqueda() {
        // Limpiar el input
        document.getElementById('buscadorInput').value = '';
        
        // Mostrar todas las tarjetas
        const tarjetas = document.querySelectorAll('.tarjeta');
        tarjetas.forEach(function(tarjeta) {
            tarjeta.classList.remove('oculta');
        });
        
        // Ocultar mensaje de "sin resultados"
        document.getElementById('sinResultados').classList.remove('visible');
        
        // Enfocar el input para seguir escribiendo
        document.getElementById('buscadorInput').focus();
    }

    // ===== BÚSQUEDA EN TIEMPO REAL (opcional) =====
    // Al escribir en el input, buscar automáticamente
    document.getElementById('buscadorInput').addEventListener('keyup', function(event) {
        buscarTarjetas();
        
        // Si presionas ESC, limpiar la búsqueda
        if (event.key === 'Escape') {
            limpiarBusqueda();
        }
    });
