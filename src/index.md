EN este archivo se encuentra el main del servidor. Aquí se cargan todos los módulos.

El primer reto es pasar la configuración y las dependencias al servidor. De momento el archivo de configuración es de tipo JSON.

El primer dilema es... Se debe leer un archivo de configuración standard o hacer un archivo de configuración por entornos o cargar de variables de entorno:
- 1. No se utilizan variables de entorno ya que se quedan guardadas en el sistema y no es para nada seguro.
- 2. Se utiliza un archivo de configuración con la congifuración standard y se añade una sección de configuración específica para distintos entornos.


Otro dilema es el de las rutas absolutas. Supongamos que cambiamos una ruta si la hacemos absoluta va a ser la misma si no, vamos a tener que cambiar todas las rutas.

Para nodejs se pueden crear alias:
https://www.npmjs.com/package/module-alias
Para typescript existe el baseUrl en el tsconfig.ts













// TODO: Cargar archivos YAML