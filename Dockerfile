FROM abc3660170/osmstyle
WORKDIR /home
COPY tileserver /home/tileserver
COPY style_dark_transparent.xml openstreetmap-carto/
WORKDIR /home/tileserver
RUN npm install
RUN npm install pm2 -g

