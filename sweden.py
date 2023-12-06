import dash
from dash import dcc, html
import plotly.express as px
import pandas as pd

# Sample data for demonstration
# Replace this with your actual data
data = {
    'City': ['Stockholm', 'Gothenburg', 'Malmo', 'Uppsala', 'Linkoping', 'Vasteras', 'Orebro', 'Helsingborg', 'Jonkoping', 'Norrkoping'],
    'Latitude': [59.3293, 57.7089, 55.6049, 59.8586, 58.4108, 59.6168, 59.2753, 56.0465, 57.7826, 58.5877],
    'Longitude': [18.0686, 11.9746, 13.0038, 17.6389, 15.6214, 16.5528, 15.2134, 12.6944, 14.1562, 16.1590],
    'Population': [975551, 583056, 347949, 233839, 161617, 155010, 155127, 107206, 136177, 137326]
}

df = pd.DataFrame(data)

# Initialize the Dash app
app = dash.Dash(__name__)

# Define the layout of the dashboard
app.layout = html.Div([
    html.H1("Map of Sweden with Markers"),
    
    # Map of Sweden with markers
    dcc.Graph(
        figure=px.scatter_geo(
            df,
            lat='Latitude',
            lon='Longitude',
            text='City',
            size='Population',
            projection='natural earth',
            title="Map of Sweden with Markers",
            opacity=0.7,
            size_max=40
        )
    ),
])

# Run the app
if __name__ == '__main__':
    app.run_server(debug=True)