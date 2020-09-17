FROM python:3

RUN mkdir /app
WORKDIR /app
COPY api/packages.txt /app/
RUN pip install -r packages.txt
COPY . /app/