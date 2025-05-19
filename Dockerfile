FROM php:8.2-apache

# Store HTML Files
RUN mkdir -p /var/www/templates/
COPY ./html/* /var/www/templates/
COPY ./style/* /var/www/html/
COPY ./flag.txt /var/
COPY ./getFlag.php /var/www/templates/

# Copy Apache configuration
COPY apache.conf /etc/apache2/conf-available/apache-cgi.conf

# Startup files
COPY start.sh /start.sh
RUN chmod +x /start.sh

EXPOSE 80

#CMD ["apache2-foreground"]
CMD ["/start.sh"]
