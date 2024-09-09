SCORE EXERCISE

function calculateScore(arr) {
    let score = 0;
    for (let num of arr) {
      if (num === 5) {
        score += 5;
      }
      else if (num % 2 === 0) {
        score += 1;
      }
      else {
        score += 3;
      }
    }
    return score;
  }
  
  // Ejemplos de uso:
  console.log(calculateScore([1, 2, 3, 4, 5])); // 13
  console.log(calculateScore([17, 19, 21]));    // 9
  console.log(calculateScore([5, 5, 5]));       // 15
  

code run: npm run start:dev

1.-You're building a high-throughput API for a cryptocurrency trading
platform. For this platform, time is extremely important because
microseconds count when processing high-volume trade orders. For
communicating with the API, you want to choose the verb that is fastest
for read-only operations.

R//a.GET
Es el HTTP estándar para realizar operaciones de lectura (read-only) en una API.


2.-You work for a Customer Relationship Management (CRM) company. The
company's clients gain CRM access through a RESTful API. The CRM allows
clients to add contact information for customers, prospects, and related
persons (e.g., virtual assistants or marketing directors). You want to choose an
appropriate API request path so clients can easily retrieve information for a
single contact while also being flexible for future software changes.

R// b./contacts/{contact_id}
Es el camino más apropiado para recuperar la información de un solo contacto (que puede ser un cliente, prospecto u otra persona relacionada) de manera flexible y específica.

3. You work for a large social media network, and you've been tasked witherror
handling for the API. You're trying to decide on an appropriate errorcode for
authentication failures based on non-existent users and incorrect passwords.
You want to balance security against brute force attacks with providing
descriptive and true error codes.

R//d. 401 if the user doesn't exist or if the password is wrong.
El código 401 Unauthorized es el más adecuado cuando un usuario no está autenticado correctamente.

4. You're writing documentation for requesting information about a given user in
your system. Your system uses UUIDS (universally unique identifiers) as user
identifiers. In your documentation, you want to show an example.

R// true
Es mejor utilizar un UUID falso en el ejemplo de código de la documentación, ya que proporciona un formato realista y da a los desarrolladores una idea clara de cómo debería verse el UUID en las solicitudes reales.

5.You're building code to handle errors issued from a remote API server. The
response may or may not have an error.

R// b. Check for the presence of an error. If it exists, throw an exception with the error.
Lanzar una excepción inmediatamente cuando se detecta un error en la respuesta es una buena práctica.


6. You have two classes: a database driver and an email driver. Both classes
need to set errors so that your front-end interface displays any errors that
transpire on your platform.

R//c. Make a driver-based error provider to handle errors in all classes that can issue errors.
Crear un proveedor de errores basado en controladores (driver-based error provider) es una solución más robusta y centralizada.


7. You need to name the private method in your class that handles
loopingthrough eCommerce products to collect and parse data. That data gets
stored in an array and set as a class property.

R//b. loopProductsAndParse()
El nombre del método debe ser conciso y expresar claramente su propósito.

8.There are multiple places in your codebase that need to access the
database. To access the database, you need to supply credentials. You
want to balance security with useability.

R//d. Put them in a .env file, load data from it into a configuration system, then request the credentials from a database service provider.

SCENARIO ANALYSIS
Para optimizar un sistema distribuido que sufre de latencias y fallos en uno de sus microservicios, seguiría el siguiente enfoque:

1. Identificación del problema
Primero, implementaría herramientas de monitoreo y trazabilidad, como Prometheus y Grafana, para analizar métricas clave como tiempos de respuesta, tasas de error y utilización de recursos. También utilizaría herramientas como Jaeger o Zipkin para rastrear las solicitudes a lo largo de los microservicios y así identificar exactamente dónde se producen las latencias o fallos.
Además, analizaría los registros del sistema (logs) para detectar patrones recurrentes de fallos o sobrecargas en momentos específicos.
2. Desarrollo de soluciones
Autoscaling: Implementaría un sistema de escalado automático (como Kubernetes) para ajustar dinámicamente el número de instancias en función de la carga del sistema, asegurando que los microservicios no se saturen durante picos de tráfico.
Balanceo de carga: Usaría un balanceador de carga para distribuir uniformemente las solicitudes entre las instancias disponibles, evitando que una sola instancia quede sobrecargada.
Caché: Integraría un sistema de caché para almacenar respuestas repetidas, mejorando el tiempo de respuesta y reduciendo la carga en los microservicios más solicitados.
Circuit Breaker: Implementaría un patrón de circuit breaker para prevenir que un fallo en un microservicio impacte al sistema completo. Esto permitiría devolver errores controlados cuando un servicio está inactivo.
Reintentos con backoff exponencial: Configuraría reintentos automáticos con un retraso incremental (backoff exponencial) en caso de fallos temporales, evitando una sobrecarga en los servicios afectados.
3. Asegurar alta disponibilidad y resiliencia
Replicación: Replicaría los microservicios en diferentes zonas de disponibilidad para garantizar que si una zona falla, las otras instancias sigan funcionando sin interrupciones.
Tolerancia a fallos: Diseñaría los microservicios con mecanismos de tolerancia a fallos, para que el fallo de un servicio no interrumpa el funcionamiento de todo el sistema, usando técnicas de fallback que proporcionen respuestas predeterminadas en caso de fallos.
