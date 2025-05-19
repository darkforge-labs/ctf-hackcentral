#!/bin/bash
a2enmod alias
a2enmod rewrite

# Generate secret.txt
tr -dc A-Za-z0-9 </dev/urandom | head -c 64 > /var/www/html/secret.txt

a2enconf apache-cgi

apache2-foreground
